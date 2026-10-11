export const domain = {
  "repo": "flowforge-task-management-platform",
  "brand": "Flowforge",
  "tagline": "Turn focus into finished work.",
  "subtitle": "Sprint planning, task ownership, and a delivery board built for clarity.",
  "theme": "flowforge",
  "primary": "tasks",
  "secondary": "sprints",
  "primaryLabel": "Tasks",
  "secondaryLabel": "Sprints",
  "statuses": [
    "Backlog",
    "Ready",
    "In progress",
    "Done"
  ],
  "secondaryStatuses": [
    "Planned",
    "Active",
    "Completed"
  ],
  "fields": [
    [
      "owner",
      "Assignee",
      "text"
    ],
    [
      "points",
      "Story points",
      "number"
    ],
    [
      "dueDate",
      "Due date",
      "date"
    ]
  ],
  "secondaryFields": [
    [
      "owner",
      "Sprint lead",
      "text"
    ],
    [
      "goal",
      "Sprint goal",
      "text"
    ],
    [
      "dueDate",
      "End date",
      "date"
    ]
  ],
  "relationLabel": "Sprint",
  "seeds": [
    [
      "Build onboarding checklist",
      "In progress",
      "Taylor Diaz",
      5,
      "2026-10-19"
    ],
    [
      "Improve search filters",
      "Ready",
      "Casey Brooks",
      3,
      "2026-10-21"
    ],
    [
      "Write release notes",
      "Done",
      "Riley Park",
      2,
      "2026-10-16"
    ]
  ],
  "secondarySeeds": [
    [
      "Sprint 12",
      "Active",
      "Taylor Diaz",
      "Make setup effortless",
      "2026-10-23"
    ],
    [
      "Sprint 13",
      "Planned",
      "Casey Brooks",
      "Improve discoverability",
      "2026-11-06"
    ]
  ],
  "actions": {
    "Backlog": [
      "Ready"
    ],
    "Ready": [
      "In progress"
    ],
    "In progress": [
      "Done"
    ]
  },
  "unit": "points"
};
