-- STEP 1:
-- HAVE TO CHANGE THE PROJECT_DATA SO THE DATA IS ACCURATE--
/* 
1. Change the headings of the University (College/University -> University) column in the csv file
2. Change the headings of the Major (Major/Area of Study -> Major) column in the csv file
3. Change the heading of the Locality (Desired Location -> Locality) column in the csv file
4. Change the heading of the Move date (Preferred Move-in Date -> Move Date) column in the csv file
5. Delete the housing preferences column
6. Change the format of the Move dates to match YYYY-MM-DD

7. Right-click on the project_data table in mySql workbench
8. Click on the Table Data import wizard -> browse -> get the updated csv file path
9. Click Create new table {database name} . project_data
10. Check the box that Drop table if exists
11. Hit next until the finsh page shows up
*/
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- STEP 2: 
--DELETING USERS AND CREATING NEW USERS TABLE WITH CORRECT SCHEMA --
DROP TABLE users;

CREATE TABLE users (
	UserID INT AUTO_INCREMENT PRIMARY KEY,
	Username VARCHAR(255),
	Password VARCHAR(255),
	Email VARCHAR(255)
);

INSERT INTO users (Username, Password, Email)
SELECT Username, Passowrd, Email
FROM project_data;

-- VERIFY THAT THE INCREMENT IS WORKING CORRECTLY --
INSERT INTO users (Username, Password,Email)
VALUES ('example1', 'password', 'example1@gmail.com');

-- THE NEXT VALUE FOR THE USERID SHOULD BE 101, IF IT ISNT DO THE FOLLOWING
DELETE FROM Users WHERE UserID = --[INSERT THE USERID VAL] -- ;	
ALTER TABLE users AUTO_INCREMENT = 101;

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 -- STEP 3:
 -- DELETING THE PROFILES TABLE AND CREATING NEW PROFILES TABLE WITH CORRECT SCHEMA -- 
 DROP TABLE profiles;

 CREATE TABLE profiles (
	profileID INT AUTO_INCREMENT PRIMARY KEY,
 	Name VARCHAR(255),
 	Email VARCHAR(255),
 	Gender VARCHAR(255),
 	University VARCHAR(255),
 	MoveDate DATE,
 	LeaseDuration VARCHAR(255),
 	HousingType VARCHAR(255),
 	Locality VARCHAR(255),
 	RoomType VARCHAR(255),
    Budget DECIMAL(10,2),
 	Smoking ENUM ('Yes', 'No') DEFAULT 'No',
 	Drinking ENUM ('Yes', 'No') DEFAULT 'No',
 	Pets ENUM ('Yes', 'No') DEFAULT 'No',
    ProfilePicture TEXT,
 	UserID  INT,
 	FOREIGN KEY (UserID) REFERENCES users(UserID)
 		ON UPDATE CASCADE
 		ON DELETE CASCADE
 );

-- INSERT TRIGGER TO GET THE UserID AUTOMATICALLY -- 
DROP TRIGGER IF EXISTS assign_userID;

DELIMITER //
CREATE TRIGGER assign_userID
BEFORE INSERT ON profiles
FOR EACH ROW
BEGIN
    DECLARE user_id INT;
    SELECT UserID INTO user_id FROM users WHERE Email = NEW.Email;
    SET NEW.UserID = user_id;
END;
//
DELIMITER ;

--INSERT DATA INTO THE TABLE --
INSERT INTO profiles (Name, Email, Gender, University, MoveDate, LeaseDuration, HousingType, Locality, RoomType,Budget, Smoking, Drinking, Pets)
SELECT pd.Name, pd.Email, pd.Gender, pd.University,pd.`Move Date`, pd.`Lease Duration`, pd.`Housing Type`, pd.Locality, pd.`Room Type`, pd.Budget,pd.Smoking,pd.Drinking, pd.Pets 
FROM project_data AS pd;

ALTER TABLE profiles AUTO_INCREMENT = 101;
SELECT * FROM profiles;
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- STEP 4:
-- CREATING PREFERENCES TABLE WITH THE CORRECT SCHEMA--
DROP TABLE preferences;

CREATE TABLE preferences (
    PreferenceID  INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(255),
    Gender VARCHAR(255),
    University VARCHAR(255),
    MoveDate DATE,
    LeaseDuration VARCHAR(255),
    HousingType VARCHAR(255),
    Locality VARCHAR(255),
    RoomType VARCHAR(255),
    Budget DECIMAL(10,2),
    Smoking ENUM ('Yes', 'No') DEFAULT 'No',
    Drinking ENUM ('Yes', 'No') DEFAULT 'No',
    Pets ENUM ('Yes', 'No') DEFAULT 'No',
    UserID INT,
    
    FOREIGN KEY (UserID) REFERENCES users(UserID)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

--CREATE A TRIGGER TO GET THE USERID FROM THE USERS TABLE --    
DROP TRIGGER IF EXISTS aassign_userID_inPreferences

DELIMITER //
CREATE TRIGGER assign_userID_inPreferences
BEFORE INSERT ON preferences
FOR EACH ROW
BEGIN
    DECLARE user_id INT;
    SELECT UserID INTO user_id FROM users WHERE Username = NEW.Username;
    SET NEW.UserID = user_id;
END;
//
DELIMITER ;

-- INSERT INTO THE PREFERENCE -- 
INSERT INTO preferences (Username,Gender, University, MoveDate, LeaseDuration, HousingType, Locality, RoomType,Budget, Smoking, Drinking, Pets)
SELECT pd.Username,pd.Gender, pd.University,pd.`Move Date`, pd.`Lease Duration`, pd.`Housing Type`,pd.Locality, pd.`Room Type`, pd.Budget,pd.Smoking,pd.Drinking, pd.Pets 
FROM project_data AS pd;

ALTER TABLE profiles AUTO_INCREMENT = 101;
SELECT * FROM preferences;
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- STEP 5:
-- CREATING THE MATCHES TABLE WITH THE CORRECT SCHEMA --
DROP TABLE matches;
CREATE TABLE matches (
	MatchID INT AUTO_INCREMENT PRIMARY KEY,
    User1Name VARCHAR(255), 
    User2Name VARCHAR(255),
    LikeStatus ENUM('Yes', 'No') DEFAULT 'No',
	User1ID INT,
    User2ID INT,
	FOREIGN KEY (User1ID) REFERENCES users(UserID)
		ON UPDATE CASCADE
		ON DELETE CASCADE,
	FOREIGN KEY (User2ID) REFERENCES users(UserID)
		ON UPDATE CASCADE
        ON DELETE CASCADE
);

DROP TRIGGER IF EXISTS matches_AssignUser1Id;
DROP TRIGGER IF EXISTS matches_AssignUser2Id;

DELIMITER //
CREATE TRIGGER matches_AssignUser1Id
BEFORE INSERT ON matches
FOR EACH ROW
BEGIN
	DECLARE user_id INT;
    SELECT UserID INTO user_id FROM profiles WHERE Name = NEW.User1Name;
    SET NEW.User1ID = user_id;
END;
//
DELIMITER ;

DELIMITER //
CREATE TRIGGER matches_AssignUser2Id
BEFORE INSERT ON matches
FOR EACH ROW
BEGIN
	DECLARE user_id INT;
    SELECT UserID INTO user_id FROM profiles WHERE Name = NEW.User2Name;
    SET NEW.User2ID = user_id;
END;
//
DELIMITER ;

-- VERIFY THAT THE TABLE IS WORKING PROPERLY
INSERT INTO matches(User1Name,User2Name, LikeStatus)
VALUES('Chad Wright', 'Jason Moss', 'Yes');

SELECT * FROM matches