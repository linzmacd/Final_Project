CREATE TABLE county (
	CensusId int,
	State varchar(50),
	County varchar(50), 
	TotalPop int,
	Men int,
	Women int,
	Hispanic float,
	White float,
	Black float,
	Native float,
	Asian float,
	Pacific float,
	Citizen int,
	Income float,
	IncomeErr float,
	IncomePerCap int,
	IncomePerCapErr int,
	Poverty float,
	ChildPoverty float,
	Employed int,
	Unemployment float
);

CREATE TABLE murders (
	RecordId int,
	AgencyName varchar(100),
	AgencyType varchar(100),
	County varchar(100),
	State varchar(100),
	Year int,
	Month varchar(100),
	Incident int,
	CrimeType varchar(100),
	CrimeSolved varchar(100),
	VictimSex varchar(100),
	VictimAge int,
	VictimRace varchar(100),
	VictimEthnicity varchar(100),
	PerpetratorSex varchar(100),
	PerpetratorAge varchar(100),
	PerpetratorRace varchar(100),
	PerpetratorEthnicity varchar(100),
	Relationship varchar(100),
	Weapon varchar(100),
	VictimCount int,
	PerpetratorCount int
);

SELECT c.CensusId, c.County, c.TotalPop, c.Men, c.Women, c.Hispanic, c.White, c.Black, 
c.Native, c.Asian, c.Pacific, c.Citizen, c.Income, c.IncomeErr, c.IncomePerCap, c.IncomePerCapErr, 
c.Poverty, c.ChildPoverty, c.Employed, c.Unemployment, murders.RecordID, murders.AgencyName, murders.AgencyType, murders.Year, murders.Month, murders.Incident,
murders.CrimeType, murders.CrimeSolved, murders.VictimSex, murders.VictimAge, murders.VictimRace, murders.VictimEthnicity, murders.PerpetratorSex, murders.PerpetratorAge, murders.PerpetratorRace,
murders.PerpetratorEthnicity, murders.Relationship, murders.Weapon, murders.VictimCount, murders.PerpetratorCount
INTO murders_by_dem
FROM county as c
INNER JOIN murders
ON murders.County = c.County;


