!function() {
    let sp = new URLSearchParams(document.URL.split('?')[1]);
    let vars = {};
    var temp = ''
    vars.fc = sp.get('warehouseId');
    vars.tf = sp.get('spanType');
    vars.pId = sp.get('processId');
    vars.process = {'dept': processes[vars.pId].dept, 'atlas': processes[vars.pId].atlas, 'lc': processes[vars.pId].lc};
    for (const [key, value] of sp) {
        if ( key.includes('startDate') ) { vars.sd = sp.get(key).split('/'); };
        if ( key.includes('endDate') ) { vars.ed = sp.get(key).split('/'); };
        if ( key.includes('startHour') ) { vars.sh = sp.get(key).split('/');
                                          if ( vars.sh.length < 2 ) {vars.sh = '0' + vars.sh}; };
        if ( key.includes('startMinute') ) { vars.sm = sp.get(key).split('/');
                                            if ( vars.sm.length < 2 ) {vars.sm = '0' + vars.sm}; };
        if ( key.includes('endHour') ) { vars.eh = sp.get(key).split('/');
                                        if ( vars.eh.length < 2 ) {vars.eh = '0' + vars.eh}; };
        if ( key.includes('endMinute') ) { vars.em = sp.get(key).split('/');
                                          if ( vars.em.length < 2 ) {vars.em = '0' + vars.em}; };
    };
    if ( vars.ed == '' ) { vars.ed = vars.sd };
  console.log(vars);
};
