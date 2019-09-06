export class Constants{
    Category=['general','sports','business','entertainment','politics','technology','health','science'];
    countryCode='in';  //By default the country is set to INDIA
    category='general'; //By default the news category is GENERAL
    Countries=[
        {
            name:'India',
            code:'in'
        },
        {
            name:'USA',
            code:'us'
        },
        {
            name:'Japan',
            code:'jp'

        },
        {
            name:'Russia',
            code:'ru'
        }
    ]

    countriesData()
    {
        return this.Countries
    }

    getCategories()
    {
        return this.Category;

    }
}