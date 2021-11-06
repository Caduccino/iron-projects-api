import { Schema, model } from 'mongoose';

const projectSchema = new Schema({
    title: { type: String, required: true, minlength: 6, maxlength: 50 },
    description: { type: String, required: true, minlength: 15, maxlength: 150 },
    tasks: [{ type: Schema.Types.ObjectId, ref: 'task', default: [] }],
    owner: { type: Schema.Types.ObjectId, ref: 'user', required: true }
}, {
    timestamps: true,
});

const Project = model('project', projectSchema);

export default Project;