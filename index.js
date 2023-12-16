document.addEventListener('DOMContentLoaded', function () {
    // replace the keyword page & pageNumber which act as a placeholder to give values in the html use DOM manipulations

    const variable = {
        page: "21333",
        pageNumber: '76'
    }

    const regexToMatchPage = /\[page]/gi;
    const regexToMatchPageNumber = /\[pageNumber]/gi;

    const ALL_ELEMENTS_IN_HTML = document.body.children

    
    Object.entries(ALL_ELEMENTS_IN_HTML).map(eachElement => {

        if(eachElement[1].nodeName !== "SCRIPT"){

        const EACH_ELEMENTS_CONTENT = eachElement[1].innerText 

          const UPDATED_TEXT = replaceMultipleText ([
            [regexToMatchPage, variable.page],
            [regexToMatchPageNumber, variable.pageNumber]
          ], EACH_ELEMENTS_CONTENT);
          
            eachElement[1].innerText = UPDATED_TEXT;

        }
    })

    function replaceMultipleText (replacements, str) {
        let result = str;
        for (let [x, y] of replacements)
          result = result.replace(x, y);
        return result;
      }

})
