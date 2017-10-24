using System; 

namespace TvMonitoring.Application.Models
{
    public class ActionResult<T>
    {
        public bool IsSuccess { get;  }
        public T Result { get;   }
        public Exception Exception { get;  }
        public string Message { get; set; }
  
        public ActionResult(T obj)
        {
            IsSuccess = true;
            Exception = null;
            Result = obj;
            Message = "Success";

        }


        public ActionResult(Exception exc)
        {
            IsSuccess = false;
            Exception = exc;
            Result = default(T);
            Message = exc.Message;
        }
    }
}
