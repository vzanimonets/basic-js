module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  const team = [];
  members.map(item => {
    if (typeof item === "string") {
      team.push(
        item
          .trim()
          .charAt(0)
          .toUpperCase()
      );
    }
  });
  return team.sort().join("");
};
