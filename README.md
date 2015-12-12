# fx

## WHAT
Historical database of FX data

## HOW
## API
- https://openexchangerates.org/api/latest.json?app_id=API_KEY_HERE

## cron
`0 12 * * * node app.js >/dev/null`

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

