const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			isLogged: "false",
			expenses: [],
			incomes: [],
			user: {},
			resume: [
				{
					year: 2021,
					month: 3,
					incomes: 50000,
					expenses: {
						total: 25000,
						week: [0, 0, 0, 0]
					},
					category: {
						entertainment: {
							total: 2300,
							week: [0, 0, 0, 0]
						},
						food: {
							total: 4500,
							week: [0, 0, 0, 0]
						},
						services: {
							total: 1900,
							week: [0, 0, 0, 0]
						},
						transport: {
							total: 5000,
							week: [0, 0, 0, 0]
						},
						home: {
							total: 4250,
							week: [0, 0, 0, 0]
						},
						education: {
							total: 2350,
							week: [0, 0, 0, 0]
						},
						clothing: {
							total: 1450,
							week: [0, 0, 0, 0]
						}
					},

					payment_method: {
						credit: 0,
						debit: 0,
						cash: 0
					}
				},
				{
					year: 2020,
					month: 3,
					incomes: 50000,
					expenses: {
						total: 25000,
						week: [10000, 5000, 3000, 7000]
					},
					category: {
						entertainment: {
							total: 2000,
							week: [0, 2000, 0, 0]
						},
						food: {
							total: 4000,
							week: [0, 4000, 0, 0]
						},
						services: {
							total: 8000,
							week: [2000, 4000, 0, 2000]
						},
						transport: {
							total: 1000,
							week: [500, 0, 500, 0]
						},
						home: {
							total: 1000,
							week: [500, 0, 500, 0]
						},
						education: {
							total: 1000,
							week: [500, 0, 500, 0]
						},
						clothing: {
							total: 1000,
							week: [500, 0, 500, 0]
						}
					},

					payment_method: {
						credit: 12,
						debit: 6,
						cash: 5
					}
				},

				{
					year: 2021,
					month: 2,
					incomes: 50000,
					expenses: {
						total: 25000,
						week: [10000, 5000, 3000, 7000]
					},
					category: {
						entertainment: {
							total: 2000,
							week: [0, 2000, 0, 0]
						},
						food: {
							total: 4000,
							week: [0, 4000, 0, 0]
						},
						services: {
							total: 8000,
							week: [2000, 4000, 0, 2000]
						},
						transport: {
							total: 1000,
							week: [500, 0, 500, 0]
						},
						home: {
							total: 1000,
							week: [500, 0, 500, 0]
						},
						education: {
							total: 1000,
							week: [500, 0, 500, 0]
						},
						clothing: {
							total: 1000,
							week: [500, 0, 500, 0]
						}
					},

					payment_method: {
						credit: 12,
						debit: 6,
						cash: 5
					}
				},
				{
					year: 2021,
					month: 1,
					incomes: 50000,
					expenses: {
						total: 25000,
						week: [10000, 5000, 3000, 7000]
					},
					category: {
						entertainment: {
							total: 2000,
							week: [0, 2000, 0, 0]
						},
						food: {
							total: 4000,
							week: [0, 4000, 0, 0]
						},
						services: {
							total: 8000,
							week: [2000, 4000, 0, 2000]
						},
						transport: {
							total: 1000,
							week: [500, 0, 500, 0]
						},
						home: {
							total: 1000,
							week: [500, 0, 500, 0]
						},
						education: {
							total: 1000,
							week: [500, 0, 500, 0]
						},
						clothing: {
							total: 1000,
							week: [500, 0, 500, 0]
						}
					},

					payment_method: {
						credit: 12,
						debit: 6,
						cash: 5
					}
				},
				{
					year: 2020,
					month: 12,
					incomes: 100000,
					expenses: {
						total: 25000,
						week: [10000, 5000, 3000, 7000]
					},
					category: {
						entertainment: {
							total: 2000,
							week: [0, 2000, 0, 0]
						},
						food: {
							total: 4000,
							week: [0, 4000, 0, 0]
						},
						services: {
							total: 8000,
							week: [2000, 4000, 0, 2000]
						},
						transport: {
							total: 1000,
							week: [500, 0, 500, 0]
						},
						home: {
							total: 1000,
							week: [500, 0, 500, 0]
						},
						education: {
							total: 1000,
							week: [500, 0, 500, 0]
						},
						clothing: {
							total: 1000,
							week: [500, 0, 500, 0]
						}
					},

					payment_method: {
						credit: 12,
						debit: 6,
						cash: 5
					}
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction

			logged: () => {
				let status = sessionStorage.getItem("is_logged");
				status != "true" ? setStore({ isLogged: "false" }) : setStore({ isLogged: status });
			},

			logOut: () => {
				sessionStorage.removeItem("access_token");
				sessionStorage.removeItem("is_logged");
				getActions().logged();
			},

			addExpense: datos => {
				const data = datos;
				let access_token = sessionStorage.getItem("access_token");

				fetch(process.env.BACKEND_URL + "/api/expense", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + access_token
					},
					body: JSON.stringify(data)
				})
					.then(response => {
						if (!response.ok) {
							response.text().then(text => alert(text));
							throw Error(response.statusText);
						} else {
							const expense = getStore().expenses;
							const updExpense = expense.concat(data);
							setStore({ expenses: [...updExpense] });
						}
						return response.json();
					})
					.then(data => {
						console.log("Succesfully added expense");
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},

			addIncome: datos => {
				let data = datos;
				let access_token = sessionStorage.getItem("access_token");

				fetch(process.env.BACKEND_URL + "/api/income", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + access_token
					},
					body: JSON.stringify(data)
				})
					.then(response => {
						if (!response.ok) {
							response.text().then(text => alert(text));
							throw Error(response.statusText);
						} else {
							const income = getStore().incomes;
							const updIncome = income.concat(data);
							setStore({ incomes: [...updIncome] });
						}
						return response.json();
					})
					.then(data => {
						console.log("Succesfully added income");
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},

			deleteExpense: variable => {
				let access_token = sessionStorage.getItem("access_token");

				fetch(process.env.BACKEND_URL + "/api/expense", {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + access_token
					},
					body: JSON.stringify({ id: variable })
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						} else {
							const expense = getStore().expenses;
							const updExpense = expense.filter(item => item.id !== variable);
							setStore({ expenses: [...updExpense] });
						}
						return response.json();
					})
					.then(data => {
						console.log("Expense deleted");
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},

			deleteIncome: variable => {
				let access_token = sessionStorage.getItem("access_token");

				fetch(process.env.BACKEND_URL + "/api/income", {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + access_token
					},
					body: JSON.stringify({ id: variable })
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						} else {
							const income = getStore().incomes;
							const updIncome = income.filter(item => item.id !== variable);
							setStore({ incomes: [...updIncome] });
						}
						return response.json();
					})
					.then(data => {
						console.log("Income deleted");
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},
			getIncome: () => {
				let access_token = sessionStorage.getItem("access_token");
				fetch(process.env.BACKEND_URL + "/api/income", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + access_token
					}
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						setStore({ incomes: data.data });
					})
					.catch(err => console.error(err));
			},
			getExpense: () => {
				let access_token = sessionStorage.getItem("access_token");
				fetch(process.env.BACKEND_URL + "/api/expense", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + access_token
					}
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						setStore({ expenses: data.data });
					})
					.catch(err => console.error(err));
			},

			getResume: () => {
				let access_token = sessionStorage.getItem("access_token");
				fetch(process.env.BACKEND_URL + "/api/finances", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + access_token
					}
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						setStore({ resume: data.data });
					})
					.catch(err => console.error(err));
			},

			getUser: () => {
				let access_token = sessionStorage.getItem("access_token");
				fetch(process.env.BACKEND_URL + "/api/user", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + access_token
					}
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						setStore({ user: data.data });
					})
					.catch(err => console.error(err));
			}
		}
	};
};

export default getState;
