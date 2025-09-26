SELECT * FROM taches;

INSERT INTO taches (nom, est_complete) VALUES("Faire le ménage", FALSE);

UPDATE taches SET est_complete = TRUE WHERE id_tache = 1;

DELETE FROM taches WHERE id_tache = 1;