export function getCollectionName(name) {
  const mapping = {
    reports: "reports",
    report_status: "report_status",
  };
  return mapping[name] ?? name;
}
