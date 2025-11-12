require('dotenv').config();
const express = require('express');
const cors = require('cors');

const materialsRouter = require('./routes/materials');
const loansRouter = require('./routes/loans');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/materials', materialsRouter);
app.use('/api/loans', loansRouter);

app.get('/', (req, res) => res.json({ ok: true, msg: 'School Loans API' }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// Archivo principal del servidor
