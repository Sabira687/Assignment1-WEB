const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());

const dataPath = path.join(__dirname, 'data.json');

function readData() {
    const rawData = fs.readFileSync(dataPath, 'utf-8');
    return JSON.parse(rawData);
}

function writeData(data) {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.get('/hello', (req, res) => {
    res.json({ message: 'Hello from server!' });
});

app.get('/time', (req, res) => {
    res.json({ time: new Date().toISOString() });
});

app.get('/status', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

app.get('/tasks', (req, res) => {
    const data = readData();
    res.json(data.tasks);
});

app.post('/tasks', (req, res) => {
    const data = readData();
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }

    const newTask = {
        id: Date.now(),
        name: name
    };

    data.tasks.push(newTask);
    writeData(data);

    res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {
    const data = readData();
    const taskId = Number(req.params.id);
    const { name } = req.body;

    const task = data.tasks.find(t => t.id === taskId);

    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }

    if (name) {
        task.name = name;
    }

    writeData(data);
    res.json(task);
});

app.delete('/tasks/:id', (req, res) => {
    const data = readData();
    const taskId = Number(req.params.id);

    const index = data.tasks.findIndex(t => t.id === taskId);

    if (index === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }

    data.tasks.splice(index, 1);
    writeData(data);

    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});