const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

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

const designTemplatesRouter = require('./routes/designTemplates');
const customAssetsRouter = require('./routes/customAssets');
const designVersionsRouter = require('./routes/designVersions');
app.use('/design-templates', designTemplatesRouter);
app.use('/custom-assets', customAssetsRouter);
app.use('/design-versions', designVersionsRouter);

const materialRequestsRouter = require('./routes/materialRequests');
app.use('/material-requests', materialRequestsRouter);

const suppliersRouter = require('./routes/suppliers');
app.use('/suppliers', suppliersRouter);

const quotationsRouter = require('./routes/quotations');
const ordersRouter = require('./routes/orders');
const paymentsRouter = require('./routes/payments');

app.use('/quotations', quotationsRouter);
app.use('/orders', ordersRouter);
app.use('/payments', paymentsRouter);

const hrmRouter = require('./routes/hrm');
app.use('/hrm', hrmRouter);

const homeSettingsRouter = require('./routes/homeSettings');
const servicesRouter = require('./routes/service');
const worksRouter = require('./routes/work');
const aboutRouter = require('./routes/about');
const contactRouter = require('./routes/contact');

app.use('/api/home-settings', homeSettingsRouter);
app.use('/api/services', servicesRouter);
app.use('/api/works', worksRouter);
app.use('/api/about', aboutRouter);
app.use('/api/contact', contactRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
