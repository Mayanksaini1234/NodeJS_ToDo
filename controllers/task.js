import { data } from "../models/task.js"
import errorHandler from "../middlewares/error.js"
export const task = async (req, res, next) => {
try {
    const { title, description } = req.body;
    await data.create({
        title, description, user: req.user
    })
    res
        .status(200)
        .json({
            success: true,
            message: "task added"
        })

} catch (error) {
    next(error);
}
}
export const my_task = async (req, res, next) => {
try {
    const id = req.user._id;
    const tasks = await data.find({ user: id });

    res
        .status(200)
        .json({
            success: true,
            MyTask: tasks
        })


} catch (error) {
next (error);
}

    }
export const update_task = async (req, res, next) => {
try {
    const task = await data.findById(req.params.id);
    if (!task)
        return next(new errorHandler("task NOt found ", 404) );

    task.isCompleted = !task.isCompleted;
    await task.save();
    res
        .status(200)
        .json({
            success: true,
            message: 'Task updated successfully'
        })

} catch (error) {
    next(error);
}

}

export const delete_task = async (req, res, next) => {

try {
    const task = await data.findById(req.params.id);

    if (!task)
        return next(new errorHandler("task NOt found ", 404) );

    await task.deleteOne(task._id);
    res
        .status(200)
        .json({
            success: true,
            message: "task deletd successfully"
        })

} catch (error) {
    next (error);
}
}