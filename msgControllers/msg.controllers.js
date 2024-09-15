import { Messages } from "../models/Messages.js";

const msgNew = async (req, res) => {
  try {
    const msgNw = await Messages.create(req.body);

    res.status(200).json(msgNw);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const msgAll = async (req, res) => {
  try {
    const { from, to } = req.body;
    const all = await Messages.find({ from, to });
    const all2 = await Messages.find({ from: to, to: from });
    const all3 = [...all, ...all2];
    all3.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    const task = await Messages.updateMany(
      { from: to, to: from },
      { seen: true }
    );

    res.status(200).json(all3);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { msgNew, msgAll };
