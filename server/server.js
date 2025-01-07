import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Connexion MongoDB avec plus de logs
const connectDB = async () => {
  try {
    console.log('Attempting to connect to MongoDB...');
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }
    console.log('MongoDB URI exists, connecting...');
    // Supprimez /Removal-IA s'il est déjà inclus dans votre URI
    const uri = process.env.MONGODB_URI;
    await mongoose.connect(uri);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error details:', error.message);
    throw error;
  }
};

// Connexion à la base de données
try {
  await connectDB();
} catch (error) {
  console.error('Failed to connect to database:', error);
  process.exit(1);
}

// Route de test pour vérifier les variables d'environnement
app.get('/api/test-env', (req, res) => {
  const uri = process.env.MONGODB_URI;
  res.json({
    hasMongoUri: !!uri,
    uriPrefix: uri ? uri.substring(0, 20) + '...' : 'not set'
  });
});

app.get('/', (req, res) => res.send("API Working"));

if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => console.log("Server Running on port " + PORT));
}

export default app;