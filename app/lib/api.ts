import { initializeApp } from '@firebase/app';
import {
  getDatabase,
  type Database,
  get,
  ref,
  type DatabaseReference,
  child,
} from '@firebase/database';
import type { Story, Job, Comment } from '~/types';

const DB_URL = process.env.DB_URL || 'https://hacker-news.firebaseio.com/';
const DB_PATH = process.env.DB_PATH || '/v0';

class ApiService {
  private readonly db: Database;
  private readonly dbRef: DatabaseReference;

  constructor() {
    const app = initializeApp({ databaseURL: DB_URL });
    this.db = getDatabase(app);
    this.dbRef = ref(this.db, DB_PATH);
  }

  fetchTopStories = async (): Promise<Story[]> => {
    const snapshot: number[] = (
      await get(child(this.dbRef, 'topstories'))
    ).val();

    return Promise.all(
      snapshot.map(async (id) => await this.fetchItem<Story>(id))
    );
  };

  fetchNewStories = async (): Promise<Story[]> => {
    const snapshot: number[] = (
      await get(child(this.dbRef, 'newstories'))
    ).val();

    return Promise.all(
      snapshot.map(async (id) => await this.fetchItem<Story>(id))
    );
  };

  fetchAskStories = async (): Promise<Story[]> => {
    const snapshot: number[] = (
      await get(child(this.dbRef, 'askstories'))
    ).val();

    return Promise.all(
      snapshot.map(async (id) => await this.fetchItem<Story>(id))
    );
  };

  fetchShowStories = async (): Promise<Story[]> => {
    const snapshot: number[] = (
      await get(child(this.dbRef, 'showstories'))
    ).val();

    return Promise.all(
      snapshot.map(async (id) => await this.fetchItem<Story>(id))
    );
  };

  fetchJobStories = async (): Promise<Job[]> => {
    const snapshot: number[] = (
      await get(child(this.dbRef, 'jobstories'))
    ).val();

    return Promise.all(
      snapshot.map(async (id) => await this.fetchItem<Job>(id))
    );
  };

  fetchNewComments = async (): Promise<Comment[]> => {
    const snapshot: number[] = (
      await get(child(this.dbRef, 'newcomments'))
    ).val();

    return Promise.all(
      snapshot.map(async (id) => await this.fetchItem<Comment>(id))
    );
  };

  fetchItem = async <T>(id: number): Promise<T> => {
    const snapshot = await get(child(this.dbRef, `item/${id}`));

    return snapshot.val() as T;
  };
}

export default new ApiService();
