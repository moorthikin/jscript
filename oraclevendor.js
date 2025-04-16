answer = (function transformEntry(source) {
    /*
    var code = source.u_company.toString();
    toString() method on GlideElement return [object, object] not the exact value.
    */
    var code = source.u_company.toString();
    var tcode = "";
	
    var gr = new GlideRecord("core_company");
    /*
    No null and Undefined check before make the Query using source.u_vendor_id
    */
    gr.addQuery('u_vendor_id', source.u_vendor_id);
    gr.query();
    if (gr.next()) {
		
        tcode = gr.u_company_code.getDisplayValue();
    }
    if (tcode.length == 0) {
        tcode = code;
    } else {

        /*
        It avoids exact duplicates but if code is substring of another company code it gives false values as positives.
        example:
        code = "123", tcode = "1123" .indexof(123) != -1 it returns true. but the values are not really match. 
        */
        if (code.length > 0 && tcode.indexOf(code) == -1) {	
            tcode = tcode + "," + code;
        }
    }
    return tcode; 
})(source);