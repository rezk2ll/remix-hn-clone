import { initializeApp } from '@firebase/app';
import {
  getDatabase,
  type Database,
  get,
  ref,
  type DatabaseReference,
  child,
  limitToFirst,
  query,
  equalTo,
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

  /**
   * Fetches the top 30 stories
   *
   * @returns {Promise<Story[]>}
   */
  fetchTopStories = async (): Promise<Story[]> => {
    const topPostsQuery = query(
      child(this.dbRef, 'topstories'),
      limitToFirst(30)
    );
    const snapshot: Record<string, number> = (await get(topPostsQuery)).val();

    return this.fetchItems<Story>(snapshot);
  };

  /**
   * Fetches the newest 30 stories
   *
   * @return {Promise<Story[]>}
   */
  fetchNewStories = async (): Promise<Story[]> => {
    const newStoriesQuery = query(
      child(this.dbRef, 'newstories'),
      limitToFirst(30)
    );
    const snapshot: Record<string, number> = (await get(newStoriesQuery)).val();

    return this.fetchItems<Story>(snapshot);
  };

  /**
   * Fetches the last 30 ask stories
   *
   * @returns {Promise<Story[]>}
   */
  fetchAskStories = async (): Promise<Story[]> => {
    const askStoriesQuery = query(
      child(this.dbRef, 'askstories'),
      limitToFirst(30)
    );
    const snapshot: Record<string, number> = (await get(askStoriesQuery)).val();

    return this.fetchItems<Story>(snapshot);
  };

  /**
   * Fetches the last 30 show stories
   *
   * @returns {Promise<Story[]>}
   */
  fetchShowStories = async (): Promise<Story[]> => {
    const showStoriesQuery = query(
      child(this.dbRef, 'showstories'),
      limitToFirst(30)
    );
    const snapshot: Record<string, number> = (
      await get(showStoriesQuery)
    ).val();

    return this.fetchItems<Story>(snapshot);
  };

  /**
   * Fetches the last 30 job stories
   *
   * @returns {Promise<Job[]>}
   */
  fetchJobStories = async (): Promise<Job[]> => {
    const jobStoriesQuery = query(
      child(this.dbRef, 'jobstories'),
      limitToFirst(30)
    );
    const snapshot: Record<string, number> = (await get(jobStoriesQuery)).val();

    return this.fetchItems<Job>(snapshot);
  };

  /**
   * Fetches the 30 most recent comments
   *
   * @returns {Promise<Comment[]>}
   */
  fetchNewComments = async (): Promise<Comment[]> => {
    const newCommentsQuery = query(
      child(this.dbRef, 'item'),
      equalTo('comment', 'type'),
      limitToFirst(30)
    );
    const snapshot: Record<string, number> = (
      await get(newCommentsQuery)
    ).val();

    return this.fetchItems<Comment>(snapshot);
  };

  /**
   * Fetches a single generic item by id
   *
   * @param {number} id the item id
   * @returns {Promise<T>}
   */
  fetchItem = async <T>(id: number): Promise<T> => {
    const snapshot = await get(child(this.dbRef, `item/${id}`));

    return snapshot.val() as T;
  };

  /**
   * Fetches the actual items from the ids provided
   *
   * @param {Object} items the items to fetch
   * @example items = { 'item-id': 1, 'item-id': 2 }
   * @returns {Promise<T[]>}
   */
  private fetchItems = async <T>(
    items: Record<string, number>
  ): Promise<T[]> => {
    return Promise.all(
      Object.values(items).map(async (id) => await this.fetchItem<T>(id))
    );
  };
}

export default new ApiService();
