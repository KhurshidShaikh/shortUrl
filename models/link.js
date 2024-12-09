import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
    longUrl: {
        type: String,
    },
    shortUrl: {
        type: String,
    }
}, {
    timestamps: true
});

const Link = mongoose.models.Link || mongoose.model('Link', linkSchema);

export default Link;
