def get_months_and_years_ytd(init_year, init_month):

    years_and_months = []

    last_month = init_month
    last_year = init_year
    for i in reversed(range(1, 13)):
        y = last_month + i
        current_month = (y - 12) % 12
        if current_month == 0:
            current_month = 12
            last_year = last_year - 1
        years_and_months.append({"year": last_year, "month": current_month})
    
    return years_and_months

def accumulate(list, attribute):
    accumulator = 0
    for item in list:
        accumulator = accumulator + getattr(item, attribute)
    return accumulator