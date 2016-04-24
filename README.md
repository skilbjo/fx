# fx

## WHAT
Historical database of FX data

## HOW
Pings an API FX rates service provider daily. In case you don't have the data already, there's a function that will generate the dates for you and automatically make the API calls for you!

Then uses `python`'s `scikit-learn` library for analysis.

## INSTALL
- `git clone git@github.com:skilbjo/fx.git`

## WORKFLOW
- generate the dates and make api calls for historical data
-- in `historical.js`, `generate_dates(2016,function(arr){`, change the year to the desired year, then run with: `node historical.js`
- schedule the daily script, `app.js`, with cron: `0 12 * * * node app.js >/dev/null`
- open an `ipython` notebook, and run the existing code for a surprise analysis!

## API
- https://openexchangerates.org/api/latest.json?app_id=API_KEY_HERE

## Other APIs
- https://openexchangerates.org/quick-start
- http://fixer.io/
- http://api.fixer.io/latest?base=USD

## SQL Queries
````
set @currency = 'CAD';
set @year = 2015;


select fx.rates.* from (
	select 
		max(rate) max, min(rate) min
	from
		fx.rates
	where
		currency in (@currency)
		and year(date) in (@year)
) max 
	join fx.rates on 
		( max = fx.rates.rate or min = fx.rates.rate )
		and currency in (@currency)
		and year(date) in (@year)
````

