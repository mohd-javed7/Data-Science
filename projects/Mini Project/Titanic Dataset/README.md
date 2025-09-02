# Titanic Dataset Mini Project - Findings Report
---
### Dataset Overview

- The dataset contains 891 rows, reduced to 784 unique passengers after removing duplicates.
- Columns include demographics (age, sex, class), travel details (fare, embarked, deck), and survival status.
- Age, Deck, Embarked, and Embark_Town columns had missing values that required treatment.
- Deck was filled with "Unknown", Embarked and Embark_Town filled with mode, and Age treated with mode.
- Sex column converted into numeric values (0 = male, 1 = female) for analysis.

### Fare & Outliers

- Minimum Fare: 0 (possible crew/family exception).
- Maximum Fare: 512 (likely wealthy passengers in luxury suites).
- Decided to retain outliers using domain knowledge.
- Scatterplots confirmed fares aligned with expected distributions across man/woman/child.
- For analysis, skewness was reduced by applying log transformation (fare_log).

### Survival by Sex

- Onboard ratio: 63% male (491), 37% female (293).
- Overall survival: 323 passengers survived.
- Female survival rate: ~74% (217/293).
- Male survival rate: ~21% (106/491).
> Clear evidence of "Women and children first" policy.

### Survival by Age (Adults vs Children)

- Adults: 674 passengers → 263 survived (~39%).
- Children: 110 passengers → 60 survived (~54%).
> Children had a higher chance of survival. Adults benefited mostly due to female passengers being prioritized.

### Survival by “Who” (Man/Woman/Child)

- Man: 451 passengers → survival 18.8%.
- Woman: 251 passengers → survival 75.6%.
- Child: 82 passengers → survival 58.5%.
> Confirms women had the highest survival rate, followed by children.

### Survival by Class

- 1st Class: 214 passengers → 135 survived (~63%).
- 2nd Class: 165 passengers → 84 survived (~51%).
- 3rd Class: 405 passengers → 104 survived (~25%).
> Higher class passengers had much better survival rates, showing wealth/status priority.

### Survival by Family (SibSp + Parch)

- Alone (0 family members) → lower survival rate.
- 1–2 family members → best survival chances (>50%).
- 3 family members → highest survival (~better coordination).
- 3 members → sharp decline, very low survival.
> Families were both a strength and a burden: small groups survived better, larger ones struggled.

### Survival by Embarked Location

- Cherbourg (C): 58% survived (90/155).
- Southampton (S): 37% survived (213/570).
- Queenstown (Q): 34% survived (20/59).
> Passengers from Cherbourg had the best odds, Queenstown the worst.

### Survival by Female Class

- Total women onboard: 293 → 217 survived (~74%).
- 1st Class females: 96.7% survived (90/93).
- 2nd Class females: 91.8% survived (67/73).
- 3rd Class females: 47% survived (60/127).
> Being female and higher class gave the highest survival chance.
> Harsh reality: Women in 3rd class had survival rates similar to men in higher classes.

---
## Final Insights

- Survival strongly depended on sex, age, and class.
- Women (esp. in 1st/2nd class) were prioritized.
- Children had better odds than men, but still worse than women.
- Class inequality was evident: survival correlated with wealth and status.
- Embarkation location also influenced outcomes (C > S > Q).