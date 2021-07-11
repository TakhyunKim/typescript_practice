{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: 'high' | 'low';
  };

  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    // 이렇게 partial을 사용하면 ToDo field 외에 다른 내용은 사용할 수 없다.
    // 즉 ToDo의 type 내에서 수정이 가능하다는 의미다
    return { ...todo, ...fieldsToUpdate };
  }

  const todo: ToDo = {
    title: 'learn Typescript',
    description: 'study hard',
    label: 'study',
    priority: 'high',
  };

  const updated = updateTodo(todo, { priority: 'low' });
  console.log(updated);
}
