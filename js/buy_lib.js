


http://webservices.amazon.com/onca/xml?
Service=AWSECommerceService&
Operation=ItemSearch(SimilarityLookup,ItemLookup)&
AWSAccessKeyId=AKIAJ3VHSVKHX4WZVECA&
AssociateTag=rICB9qNUTtahGA0+H+7qozsF+koYLE2g7u+hyRSA&
SearchIndex=FashionMen&
Sort=price&
Keywords=lacoste%20polo&
ResponseGroup=Accessories%2CImages%2CItemAttributes
&Timestamp=2017-02-15T12%3A00%3A00Z
&Signature=[Request Signature]

signature:

query='
AWSAccessKeyId=AKIAJ3VHSVKHX4WZVECA
&AssociateTag=rICB9qNUTtahGA0+H+7qozsF+koYLE2g7u+hyRSA
&ItemId=0679722769
&Operation=ItemLookup
&ResponseGroup=Images%2CItemAttributes%2COffers%2CReviews....pour Images,ItemAttributes,Offers,Reviews    http://docs.aws.amazon.com/AWSECommerceService/latest/DG/CHAP_ResponseGroupsList.html
&Service=AWSECommerceService
&Timestamp=Date.toISOString().replace(/:/g,'%3A')
&Version=2013-08-01'

make_request=function(query,marketPlace) {
    hash_data = ['GET',marketPlace, '/onca/xml', query].join("\n")
    secret = "1234567890"
    hmac = hmac_(hash_data, secret)
    var sign = $.base64.encode(hmac),
    console.log("js_sign="+sign);
	$.ajax(query:'http://webservices.amazon.com/onca/xml?'+query+'&Signature='+sign);
}
hmac_=function(message,secret) {
var newHMAC = CryptoJS.HmacSHA256(message,secret);
    return newHMAC;
}

Locale	Endpoint, marketPlace
BR	
http://webservices.amazon.com.br/onca/xml

CA	
http://webservices.amazon.ca/onca/xml

CN	
http://webservices.amazon.cn/onca/xml

DE	
http://webservices.amazon.de/onca/xml

ES	
http://webservices.amazon.es/onca/xml

FR	
http://webservices.amazon.fr/onca/xml

IN	
http://webservices.amazon.in/onca/xml

IT	
http://webservices.amazon.it/onca/xml

JP	
http://webservices.amazon.co.jp/onca/xml

MX	
http://webservices.amazon.com.mx/onca/xml

UK	
http://webservices.amazon.co.uk/onca/xml

US	
http://webservices.amazon.com/onca/xml
