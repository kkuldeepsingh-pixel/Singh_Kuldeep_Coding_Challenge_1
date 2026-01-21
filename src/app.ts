import express, { Request, Response } from "express";
import { getPlayerById, calculatePerformanceRating } from "./services/playerService";

const app = express();
