import dotenv from 'dotenv'

dotenv.config();

export const PORT = 5555;

const PASSWORD = process.env.PASSWORD
export const mongoDBURL = `mongodb+srv://jeremysabina:${PASSWORD}@cluster0.ydiedlj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
