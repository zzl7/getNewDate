(function(window){
    var g = function(){
        return new g.prototype.init();
    }
    g.fn = g.prototype = {
        getNewDate: "1.0.0",
        length: 0,
        constructor: g,
        init: function(){
            this.y = '';
            this.m = '';
            this.d = '';
            this.h = '';
            this.min = '';
            this.sec = ''; 
            this.formatter = function(){
               return this.y+'-'+(this.m<10?('0'+this.m):this.m)+'-'+(this.d<10?('0'+this.d):this.d)+' '+(this.h<10?('0'+this.h):this.h)+':'+(this.min<10?('0'+this.min):this.min)+':'+(this.sec<10?('0'+this.sec):this.sec); 
            }
        }
    }
    
    g.prototype.init.prototype = g.prototype;
   
    
    //获取当前时间
    
    g.fn.currenTime = function(){
        var date = new Date();
        this.y = date.getFullYear();
        this.m = date.getMonth()+1;
        this.d = date.getDate();
        this.h = date.getHours();
        this.min = date.getMinutes();
        this.sec = date.getSeconds();
        return this.formatter();
    };

    //获取某一天的日期
    g.fn.getOneDay = function(day){
        var today = new Date();
        var yesterday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
        var yesterday = new Date();
        yesterday.setTime(yesterday_milliseconds);

        this.y = yesterday.getFullYear();
        this.d = yesterday.getDate();
        this.m = yesterday.getMonth() + 1;
        this.h = yesterday.getHours();

        this.min = yesterday.getMinutes();
        this.sec = yesterday.getSeconds();
        return this.formatter();
    }

    //获取上星期的第一天的日期
    g.fn.lastWeekFirst = function(day) {
        var today = new Date();
        var curDay = today.getDay()-1;
        var yesterday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * (day-curDay);
        var yesterday = new Date();
        yesterday.setTime(yesterday_milliseconds);
        this.y = yesterday.getFullYear();
        this.d = yesterday.getDate();
        this.m = yesterday.getMonth() + 1;
        this.h = yesterday.getHours();
        this.min = yesterday.getMinutes();
        this.sec = yesterday.getSeconds();
        
        return this.formatter();
    }

    //获取上星期的最后一天的日期
    g.fn.lastWeekEnd = function(day){
        var today = new Date();
        var curDay = 7-today.getDay()
        var yesterday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * (day+curDay);
        var yesterday = new Date();
        yesterday.setTime(yesterday_milliseconds);
        this.y = yesterday.getFullYear();
        this.d = yesterday.getDate();
        this.m = yesterday.getMonth() + 1;
        this.h = yesterday.getHours();
        this.min = yesterday.getMinutes();
        this.sec = yesterday.getSeconds();
        return this.formatter();
    }

    //获取当前月第一天的日期
    g.getCurrentMonthFirst = g.fn.getCurrentMonthFirst = function (){
        var date = new Date();
        date.setDate(1);
        return date;
    }

    //获取上月第一天的日期
    g.fn.getLastMonthFirst = function (){

        var LastMonthFirst = new Date(getDate.getCurrentMonthFirst().setMonth(getDate.getCurrentMonthFirst().getMonth()-1));;//上个月
        this.y = LastMonthFirst.getFullYear();
        this.d = LastMonthFirst.getDate();
        this.m = LastMonthFirst.getMonth() + 1;
        var str = y+'-'+(m<10?('0'+m):m)+'-'+(d<10?('0'+d):d)
        return str;
    }

    //获取上月最后一天的日期
    g.fn.getLastMonthLast = function(){
        var LastMonthFirst = new Date(getDate.prototype.getCurrentMonthFirst().setDate(getDate.prototype.getCurrentMonthFirst().getDate()-1));
        this.y = LastMonthFirst.getFullYear();
        this.d = LastMonthFirst.getDate();
        this.m = LastMonthFirst.getMonth() + 1;
        var str = y+'-'+(m<10?('0'+m):m)+'-'+(d<10?('0'+d):d)
        return str;
    }

    window.getNewDate = g;

})(window)

