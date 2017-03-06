select crosstabcode('dw.rates','date','currency','max(rate)','text');

select * from crosstab (
 'select date,
  currency,
  max(rate)
  from dw.rates
  where currency in (''EUR'',''GBP'')
  group by 1,2
  order by 1,2',
 'select distinct currency
  from dw.rates
  where currency in (''EUR'',''GBP'')
  order by 1'  )  as ct (  date varchar,EUR text,GBP text);
