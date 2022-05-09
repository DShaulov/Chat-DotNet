using Microsoft.AspNetCore.Mvc;
using AP2_Chat_DotNet_WebAPI.Models;
using Microsoft.AspNetCore.Authorization;

namespace AP2_Chat_DotNet_WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactsController : Controller
    {
        [Authorize]
        [HttpGet]
        public IActionResult GetAllContacts()
        {
            string userId = User.Claims.FirstOrDefault(c => c.Type.Equals("UserId", StringComparison.InvariantCultureIgnoreCase)).Value;
            ContactModel contactModel = new ContactModel();
            List<Contact>? allContacts = contactModel.getContacts(userId);
            return Json(allContacts);
        }
        [Authorize]
        [HttpPost]
        public IActionResult AddContact(string id, string name, string server)
        {
            string userId = User.Claims.FirstOrDefault(c => c.Type.Equals("UserId", StringComparison.InvariantCultureIgnoreCase)).Value;
            ContactModel contactModel = new ContactModel();
            Contact newContact = new Contact();
            newContact.name = name;
            newContact.server = server;
            newContact.id = id;
            newContact.last = null;
            newContact.lastdate = null;
            newContact.whose = userId;
            return Ok("ok");
        }

        [Authorize]
        [HttpGet]
        [Route("{id}")]
        public IActionResult GetContactById(string id)
        {
            string userId = User.Claims.FirstOrDefault(c => c.Type.Equals("UserId", StringComparison.InvariantCultureIgnoreCase)).Value;
            ContactModel contactModel = new ContactModel();
            List<Contact>? allContacts = contactModel.getContacts(userId);
            Contact foundContact = new Contact();
            bool contactFound = false;
            allContacts.ForEach(contact =>
            {
                if (contact.id == id)
                {
                    foundContact = contact;
                    contactFound = true;
                }
            });
            if (contactFound)
            {
                return Json(foundContact);
            }
            else
            {
                return Json(new EmptyResult());
            }
            

        }

    }
}
