const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };
  const formattedDate = (d) => {
    return d.toISOString().split("T")[0];
  };

  var dateToday = new Date();
  const today = formattedDate(dateToday);
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  );
  const tomorrrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate + 1))
  );

  const overdue = () => {
    const arr = all.filter((person) => person.dueDate == yesterday);
    return arr;
  };

  const dueToday = () => {
    const arr = all.filter((person) => person.dueDate === today);
    return arr;
  };

  const dueLater = () => {
    const arr = all.filter((person) => person.dueDate === tomorrow);
    return arr;
  };
  const toDisplayableList = (list) => {
    arr = [];
    const display = list.map((item) => {
      const completionStatus = item.completed ? "[x]" : "[ ]";
      const displayedDate =
        item.dueDate === new Date().toLocaleDateString("en-CA")
          ? ""
          : item.dueDate;
      arr.push(completionStatus + " " + item.title + " " + displayedDate);
    });
    return arr.join("\n").trim();
  };
  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};
module.exports = todoList;