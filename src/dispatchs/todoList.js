import reducer from '@/reducers/todoList';
import { ADD, REMOVE, COMPLETED } from '@/actions/todoList';

export default (ctx) => {
  const { addItem, removeItem, changeCompleted } = reducer(ctx.todoData);
  return function (type, ...args) {
    switch (type) {
      case ADD:
        ctx.todoData = addItem(...args);
        break;
      case REMOVE:
        ctx.todoData = removeItem(...args);
        break;
      case COMPLETED:
        ctx.todoData = changeCompleted(...args);
        break;

      default:
        break;
    }
  }
}