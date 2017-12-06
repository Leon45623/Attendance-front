angular.module('starter.services', [])
.service('newService',function($http){

this.ip="192.168.191.1";
//this.ip="127.0.0.1";

this.findsheet=function(msg,res){
data=JSON.stringify(msg);
			$.ajax({
				url:"http://"+this.ip+":8080/Attendance/webservice/hehe/findsheet",
				type:"post",
				dataType:'json',
				data:data,
				contentType:"application/json",
				success:function(data){
          res(data);
				},
				error:function(){
				}
			});
}

this.upload=function(form,res){

			$.ajax({
				url:"http://"+this.ip+":8080/Attendance/webservice/hehe/upload",
				type:"post",
                data:form,
                processData:false,
                contentType:false,
                success:function(data){
                 
                    res(data);
                },
                error:function(e){
                    alert("错误！！");
                 
                }
			});
}



this.updateUser=function(msg,res){
data=JSON.stringify(msg);
			$.ajax({
				url:"http://"+this.ip+":8080/Attendance/webservice/hehe/updateUser",
				type:"post",
				dataType:'json',
				data:data,
				contentType:"application/json",
				success:function(data){
          res(data);
				},
				error:function(){
				}
			});
}



this.findUser=function(msg,res){
data=JSON.stringify(msg);
			$.ajax({
				url:"http://"+this.ip+":8080/Attendance/webservice/hehe/findUser",
				type:"post",
				dataType:'json',
				data:data,
				contentType:"application/json",
				success:function(data){
          res(data);
				},
				error:function(){
				}
			});
}


this.addemployee=function(msg,res){
data=JSON.stringify(msg);
			$.ajax({
				url:"http://"+this.ip+":8080/Attendance/webservice/hehe/addemployee",
				type:"post",
				dataType:'json',
				data:data,
				contentType:"application/json",
				success:function(data){
          res(data);
				},
				error:function(){
				}
			});
}




this.findemployeeById=function(msg,res){
data=JSON.stringify(msg);
			$.ajax({
				url:"http://"+this.ip+":8080/Attendance/webservice/hehe/findemployeeById",
				type:"post",
				dataType:'json',
				data:data,
				contentType:"application/json",
				success:function(data){
          res(data);
				},
				error:function(){
				}
			});
}


this.findisChecked=function(msg,res){
data=JSON.stringify(msg);
			$.ajax({
				url:"http://"+this.ip+":8080/Attendance/webservice/hehe/findisChecked",
				type:"post",
				dataType:'json',
				data:data,
				contentType:"application/json",
				success:function(data){
          res(data);
				},
				error:function(){
				}
			});
}




this.findPageBean=function(msg,res){
data=JSON.stringify(msg);
			$.ajax({
				url:"http://"+this.ip+":8080/Attendance/webservice/hehe/findPageBean",
				type:"post",
				dataType:'json',
				data:data,
				contentType:"application/json",
				success:function(data){
          res(data);
				},
				error:function(){
				}
			});
}




this.addRemake=function(msg,res){
data=JSON.stringify(msg);
			$.ajax({
				url:"http://"+this.ip+":8080/Attendance/webservice/hehe/addRemake",
				type:"post",
				dataType:'json',
				data:data,
				contentType:"application/json",
				success:function(data){
          res(data);
				},
				error:function(){
				}
			});
}


this.findchecknow=function(msg,res){
data=JSON.stringify(msg);
			$.ajax({
				url:"http://"+this.ip+":8080/Attendance/webservice/hehe/findchecknow",
				type:"post",
				dataType:'json',
				data:data,
				contentType:"application/json",
				success:function(data){
          res(data);
				},
				error:function(){
				}
			});
}



this.findEmployeeByResult=function(msg,res){
data=JSON.stringify(msg);
			$.ajax({
				url:"http://"+this.ip+":8080/Attendance/webservice/hehe/findEmployeeByResult",
				type:"post",
				dataType:'json',
				data:data,
				contentType:"application/json",
				success:function(data){
          res(data);
				},
				error:function(){
				}
			});
}

this.findResultByDate=function(msg,res){
data=JSON.stringify(msg);
			$.ajax({
				url:"http://"+this.ip+":8080/Attendance/webservice/hehe/findResultByDate",
				type:"post",
				dataType:'json',
				data:data,
				contentType:"application/json",
				success:function(data){
          res(data);
				},
				error:function(){
				}
			});
}




this.insertReocrd=function(msg,res){
data=JSON.stringify(msg);
			$.ajax({
				url:"http://"+this.ip+":8080/Attendance/webservice/hehe/insertReocrd",
				type:"post",
				dataType:'json',
				data:data,
				contentType:"application/json",
				success:function(data){
          res(data);
				},
				error:function(){
				}
			});
}



this.findmysheet=function(msg,res){
data=JSON.stringify(msg);
			$.ajax({
				url:"http://"+this.ip+":8080/Attendance/webservice/hehe/findmysheet",
				type:"post",
				dataType:'json',
				data:data,
				contentType:"application/json",
				success:function(data){
          res(data);
				},
				error:function(){
				}
			});
}

this.search=function(msg,res){
data=JSON.stringify(msg);
			$.ajax({
				url:"http://"+this.ip+":8080/Attendance/webservice/hehe/search",
				type:"post",
				dataType:'json',
				data:data,
				contentType:"application/json",
				success:function(data){
          res(data);
				},
				error:function(){
				}
			});
}




this.findSeatById=function(msg,res){
data=JSON.stringify(msg);
			$.ajax({
				url:"http://"+this.ip+":8080/Attendance/webservice/hehe/findSeatById",
				type:"post",
				dataType:'json',
				data:data,
				contentType:"application/json",
				success:function(data){
          res(data);
				},
				error:function(){
				}
			});
}




this.findAllseat=function(msg,res){
data=JSON.stringify(msg);
			$.ajax({
				url:"http://"+this.ip+":8080/Attendance/webservice/hehe/findAllseat",
				type:"post",
				dataType:'json',
				data:data,
				contentType:"application/json",
				success:function(data){
          res(data);
				},
				error:function(){
				}
			});
}




this.findEmployee=function(msg,res){
data=JSON.stringify(msg);
			$.ajax({
				url:"http://"+this.ip+":8080/Attendance/webservice/hehe/findEmployeelist",
				type:"post",
				dataType:'json',
				data:data,
				contentType:"application/json",
				success:function(data){
          res(data);
				},
				error:function(){
				}
			});
}



this.checkout=function(msg,res){
data=JSON.stringify(msg);
			$.ajax({
				url:"http://"+this.ip+":8080/Attendance/webservice/hehe/checkout",
				type:"post",
				dataType:'json',
				data:data,
				contentType:"application/json",
				success:function(data){
          res(data);
				},
				error:function(){
				}
			});
}



this.checkin=function(msg,res){
data=JSON.stringify(msg);
			$.ajax({
				url:"http://"+this.ip+":8080/Attendance/webservice/hehe/checkin",
				type:"post",
				dataType:'json',
				data:data,
				contentType:"application/json",
				success:function(data){
          res(data);
				},
				error:function(){
				}
			});
}



this.registerdetail=function(msg,res){
data=JSON.stringify(msg);
			$.ajax({
				url:"http://"+this.ip+":8080/Attendance/webservice/hehe/addphone",
				type:"post",
				dataType:'json',
				data:data,
				contentType:"application/json",
				success:function(data){
          res(data);
				},
				error:function(){
				}
			});
}




this.findAllEmployee=function(msg,res){
data=JSON.stringify(msg);
			$.ajax({
				url:"http://"+this.ip+":8080/Attendance/webservice/hehe/findAllEmployee",
				type:"post",
				dataType:'json',
				data:data,
				contentType:"application/json",
				success:function(data){
          res(data);
				},
				error:function(){
				}
			});
}

this.register=function(msg,res){
data=JSON.stringify(msg);
			$.ajax({
				url:"http://"+this.ip+":8080/Attendance/webservice/hehe/register",
				type:"post",
				dataType:'json',
				data:data,
				contentType:"application/json",
				success:function(data){
          res(data);
				},
				error:function(){
				}
			});
}




this.login=function(msg,res){
data=JSON.stringify(msg);
			$.ajax({
				url:"http://"+this.ip+":8080/Attendance/webservice/hehe/login",
				type:"post",
				dataType:'json',
				data:data,
				contentType:"application/json",
				success:function(data){
          res(data);
				},
				error:function(){
				}
			});
}


})

