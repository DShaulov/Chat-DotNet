using Microsoft.AspNetCore.Mvc;
using AP2_Chat_DotNet_WebAPI.Models;
using Microsoft.AspNetCore.Authorization;
using AP2_Chat_DotNet_WebAPI.Services;

namespace AP2_Chat_DotNet_WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactsController : Controller
    {
        private readonly IContactService contactService;
        public ContactsController(IContactService service)
        {
            contactService = service;
        }
        [Authorize]
        [HttpGet]
        public IActionResult GetAllContacts()
        {
            string userId = User.Claims.FirstOrDefault(c => c.Type.Equals("UserId", StringComparison.InvariantCultureIgnoreCase)).Value;
            List<Contact>? allContacts = contactService.getContacts(userId);
            return Json(allContacts);
        }
        [Authorize]
        [HttpPost]
        public IActionResult AddContact(string id, string name, string server)
        {
            string userId = User.Claims.FirstOrDefault(c => c.Type.Equals("UserId", StringComparison.InvariantCultureIgnoreCase)).Value;
            contactService.addContact(userId, id, name, server);
            return StatusCode(201);
        }

        [Authorize]
        [HttpGet]
        [Route("{id}")]
        public IActionResult GetContactById(string id)
        {
            string userId = User.Claims.FirstOrDefault(c => c.Type.Equals("UserId", StringComparison.InvariantCultureIgnoreCase)).Value;
            Contact? foundContact = contactService.getContactById(userId, id);
            if (foundContact != null)
            {
                return Json(foundContact);
            }
            else
            {
                return StatusCode(404);
            }
        }
        [Authorize]
        [HttpPut]
        [Route("{id}")]
        public IActionResult UpdateContactById(string id, string name, string server)
        {
            string userId = User.Claims.FirstOrDefault(c => c.Type.Equals("UserId", StringComparison.InvariantCultureIgnoreCase)).Value;
            bool updateSuccesful = contactService.updateContactById(userId, id, name, server);
            if (updateSuccesful)
            {
                return NoContent();
            }
            else
            {
                return StatusCode(404);
            }
        }
        [Authorize]
        [HttpDelete]
        [Route("{id}")]
        public IActionResult DeleteContactById(string id)
        {
            string userId = User.Claims.FirstOrDefault(c => c.Type.Equals("UserId", StringComparison.InvariantCultureIgnoreCase)).Value;
            bool removeSuccesful = contactService.removeContactById(userId, id);
            if (removeSuccesful)
            {
                return NoContent();
            }
            else
            {
                return StatusCode(404);
            }
        }

    }
}
