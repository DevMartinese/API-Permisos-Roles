import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/companydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
})
        .then(db => console.log('DB is connected'))
        .catch(error => console.log(error))