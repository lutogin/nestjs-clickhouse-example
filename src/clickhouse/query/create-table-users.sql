create table users (
    id Int64,
    name String,
    birthDate Date
) ENGINE = MergeTree ORDER BY id;
