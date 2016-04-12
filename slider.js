$(document).ready(
	function()
	{	
		var pause_value =false;
		var count=0;
		var time;
		var max_count = $('.rows').length;

		main();

		function main()
		{
			$('.rows').on('mouseenter',pause);
			$('.rows').on('mouseleave',start);
			$('#right-arrow').on('click',manual_next);
			$('#left-arrow').on('click',manual_prev);
		}
		

			setTimer();
		}
		
		function start()
		{	
			pause_value=false;
			setTimer();
		}

			

		function setTimer()
		{	
			if(pause_value)
			{
		     	stop();
	     	}
	     	else
	     	{
		     	time = setInterval(move,2000);
		     	console.log('timer strated');
		     	pause_value=false;
    	 	}
		}

		function manual_next()
		{
			stop();
			pause_value=true;
			move();
		}

		function manual_prev()
		{
			stop();
			prev();
		}

		function pause()
		{	
			stop();
			pause_value=true;
		}

		function move()
		{	
			count++;
			if(count > max_count -1)
			{
				count=0;
			}
			
			var left = 100 * count;
			$('#container').css('left','-' + left + '%');
		}

		function prev()
		{	
			count--;
			if(count < 0)
			{
				count=max_count - 1;
			}

			var left = 100 * count;
			$('#container').animate({'left':'-' + left + '%'},000);
		}

		function stop()
		{	
			console.log('stop clicked');
			clearInterval(time);
		}
		    
	});