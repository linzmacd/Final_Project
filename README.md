# Would Your Murder Be Solved?

## Project Overview

We have selected the influence of demographics on the homicide solve rate in California as the topic for our final group project. In getting to know one another we found that we have a shared fondness for true crime documentaries and thought it would be interesting to look into trends in the solve rates for homicide cases in our home state. More specifically we hope to answer the following questions:

- Is there a correlation between the personal attributes of the victim and the solve rate? 
- Is there a correlation between county demographics where the murder occurred and the solve rate?
- Can we develop a machine learning model that predicts whether or not a crime would be solved given a hypothetical set of circumstances?

## Data Sources

Our source data comes from two datasets found on Kaggle:
1. [U.S. Homicide Reports, 1980-2014](https://www.kaggle.com/jyzaguirre/us-homicide-reports): 24 columns, 
	- 24 columns (16 string, 6 numerical)
	- 638,454 rows
2. [US Census Demographic Data](https://www.kaggle.com/muonneutrino/us-census-demographic-data/data?select=acs2015_county_data.csv)
	- 37 columns (2 string, 35 numerical)
	- 3220 rows

## Communication Protocols

We will communicate primarily on Slack, host group meetings on Zoom, and share files using GoogleDocs. 

## Technologies Used

- Data Cleaning & Analysis
	- Pandas
	- Matplotlib

- Database Storage & Connectivity
	- PostGreSQL
	- Amazon Web Services
	- Psycopg2

- Machine Learning
	- SciKitLearn
	- TensorFlow

- Dashboard
	- Tableau
	- JavaScript
	- HTML
	- CSS
	- D3

## Database

After performing some initial cleaning and restructuring of the data using Python Pandas, the datasets were exported to pre-defined PostGreSQL tables. The tables were then joined producing our final merged dataset which was uploaded to a Amazon Web services S3 bucket where it was accessible to all team members for further analysis.    

## Machine Learning Model

The merged dataset was imported from AWS and preprocessed for training machine learning models. In addition to removing several unneccessary columns, several categories were binned and others were encoded binarily. The data was divided into target and features data, split into training and testing datasets, and scaled. 

Random forest, logistic regression, and deep neural net models were run on the dataset and it was determined that the models were overfitting the data. A filtered dataset was then created containing only the categories that proved to be the most important factors in predicting an outcome. Running the models on the less noisy dataset gave accuracies of about 0.8. 

## Presentation

Our final presentation and notecards can be found [here](https://docs.google.com/presentation/d/1gGgPeMOnQAjWxVcXPcwtUPPKCR3fbvde0NED2Ms2uRk/edit?usp=sharing)

## Dashboard

Our dashboard can be found [here](https://linzmacd.github.io/Final_Project/) and contains a Tableau story as well as an interactive filterable table.

<a href="https://linzmacd.github.io/Final_Project/"><img src="Resources/header.PNG"></img></a>