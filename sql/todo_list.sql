SELECT * FROM taches;

INSERT INTO taches (nom, est_complete) VALUES("Faire le ménage", FALSE);

UPDATE taches SET est_complete = TRUE WHERE nom = "Faire le ménage";

DELETE FROM taches WHERE nom = "Faire le ménage";