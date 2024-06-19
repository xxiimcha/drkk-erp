const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const usersRouter = require('./routes/users');
const serviceRequestsRouter = require('./routes/serviceRequests');
const slasRouter = require('./routes/slas');
const messagesRouter = require('./routes/messages');
const resourceAllocationsRouter = require('./routes/resourceAllocations');
const discussionsRouter = require('./routes/discussions');

app.use('/users', usersRouter);
app.use('/service-requests', serviceRequestsRouter);
app.use('/slas', slasRouter);
app.use('/messages', messagesRouter);
app.use('/serviceRequests', serviceRequestsRouter);
app.use('/resource-allocations', resourceAllocationsRouter);
app.use('/discussions', discussionsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
