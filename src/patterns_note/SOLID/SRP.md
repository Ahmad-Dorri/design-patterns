# Definition

A class should only have one and only one reason to change. It should do one thing and do it completely.

> Reason to change means "a stakeholder or actor". If your employee class calculates payroll, generate a pdf report and saves to a database, it has three reason to change. Split it into **PayrollCalculator**, **EmployeeReportGenerator** and **EmployeeRepository**. It means it should have one business rule not micro classes.

### Suggestion

We should not over-engineering classes and split every thing from each other. If two methods always change together they should not split even though they do different job.
