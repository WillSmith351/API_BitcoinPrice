# ~~ French Documentation ~~

Ce code est un script Node.js conçu pour récupérer et afficher le taux de change actuel de Bitcoin par rapport à une devise spécifiée. Le script utilise l'API Coindesk pour obtenir les données de prix actuelles.

# Structure du code
Le code est structuré de la manière suivante :

- Importation de la bibliothèque axios.
- Définition d'une fonction asynchrone principale appelée main.
- Gestion de l'argument de la devise à partir des arguments de ligne de commande ou utilisation de 'USD' par défaut.
- Exécution d'une requête GET vers l'API Coindesk et récupération des données de prix actuelles.
- Gestion des erreurs potentielles telles que les devises inconnues ou les problèmes de connexion.
- Affichage du taux de change de Bitcoin par rapport à la devise spécifiée.

# Fonctionnalités du script
Le script effectue les opérations suivantes :

- Récupère la devise spécifiée en argument de la ligne de commande ou utilise 'USD' par défaut.
- Effectue une requête GET à l'API Coindesk pour obtenir les données de prix actuelles de Bitcoin.
- Extrait et affiche le taux de change actuel de Bitcoin par rapport à la devise spécifiée, ainsi que la date de la dernière mise à jour des données.

# Dépendances
Ce script utilise la bibliothèque axios pour effectuer des requêtes HTTP.

# Utilisation
Le script peut être exécuté en ligne de commande en spécifiant la devise souhaitée en tant qu'argument. 
Par exemple :

```
node btc.js EUR
```
Cela affichera le taux de change actuel de Bitcoin par rapport à l'euro.

# Points importants
Assurez-vous d'avoir installé Node.js sur votre machine pour exécuter le script.
L'API Coindesk doit être accessible pour que le script puisse fonctionner correctement.
Assurez-vous d'avoir une connexion Internet active pour récupérer les données de l'API.

# ~~ English Documentation ~~

This code is a Node.js script designed to fetch and display the current exchange rate of Bitcoin against a specified currency. The script utilizes the Coindesk API to obtain the current price data.

# Code Structure
The code is structured as follows:

- Importing the axios library.
- Defining a main asynchronous function called main.
- Handling the currency argument from the command line arguments or using 'USD' as the default.
- Performing a GET request to the Coindesk API and retrieving the current price data.
- Handling potential errors such as unknown currencies or connection issues.
- Displaying the Bitcoin exchange rate against the specified currency.

# Script Features
The script performs the following operations:

- Retrieves the specified currency from the command line argument or uses 'USD' by default.
- Performs a GET request to the Coindesk API to fetch the current Bitcoin price data.
- Extracts and displays the current exchange rate of Bitcoin against the specified currency, along with the date of the last data update.

# Dependencies
This script uses the axios library to make HTTP requests.

# Usage
The script can be executed via the command line by specifying the desired currency as an argument. For example:

```
node btc.js EUR
```
This will display the current exchange rate of Bitcoin against the Euro.

# Important Points
Make sure you have Node.js installed on your machine to run the script.
The Coindesk API must be accessible for the script to function properly.
Ensure you have an active internet connection to retrieve the API data.

---
