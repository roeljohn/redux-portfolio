import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: process.env.NOTIFICATION_API_URL
  baseURL: 'https://5e66fad81937020016fed376.mockapi.io/api/v1/'
});


export const getNotifications = () => axiosInstance.get(`notifications`);

export const putNotification = (id, data) => axiosInstance.put(`notifications/${id}`, {
  "id": data.id,
  "userId": data.userId,
  "title": data.title,
  "completed": data.completed,
  "archived": data.archived,
  "read": true,
  "dueDate": data.dueDate,
  "startDate": data.startDate
});

export const postUnreadNotification  = (id) => axiosInstance.post(`notifications/${id}/unread`);

export const postReadAllNotifications = () => axiosInstance.post(`notifications/readAll`);

export const postUnreadAllNotifications = () => axiosInstance.post(`notifications/unreadAll`);