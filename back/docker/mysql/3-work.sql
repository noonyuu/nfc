CREATE TABLE IF NOT EXISTS works (
  id VARCHAR(255) PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  created_at DATETIME,
  updated_at DATETIME
) ENGINE=InnoDB;
