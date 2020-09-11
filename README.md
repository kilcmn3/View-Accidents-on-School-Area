## View Accidents on School Area
    :Self mini project that shows the school zone accident area on the map.
    Using two api 1) KAKAO map API, 2)Free data API(from official Korea's public web site data).

# References
    1. Adding customer Enviorment Vairables in React
        => https://create-react-app.dev/docs/adding-custom-environment-variables/

# Known-issues
    1. cors-origin issue. When requesting API to data.go.kr the error throw as 'cros-origin-error'. Ultimately figured out by adding { "proxy": domain.com} to package.json but need to understand why it works this way. 
    
    2. Fetching from data.go.kr only return data by XML format. Alternately using npm-xml--js to solve this issue. This package allow xml-data to convert as json object.

# Improvement 
    1. Two fetch one from App.js and from MapContainer. Was it really necessary? 