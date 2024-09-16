# Multi Role Routing (Guard Approach)

Naive demonstration of Multi-Role Routing in NextJs with Guard Approach.

### General Architecture
![image](https://github.com/user-attachments/assets/caf3e3b6-d836-4da2-b4a4-483e9b4d99c5)

### Output
![image](https://github.com/user-attachments/assets/affa6d50-c764-41ff-8484-27f86c40b229)

This example demonstrates a role-based access control system with four distinct user roles:
1. Admin
2. Care-Provider
3. Client (Referred)
4. Client (Not Referred)

The system includes a table that defines which routes (pages) are accessible to each user role. Users can switch between different roles and navigate to various pages to see how permissions change based on their current role.
The access control is implemented using an AuthorizationGuard component. This guard is wrapped around the layout file and serves as the decision-making mechanism. It determines whether a particular role should be allowed access to a specific page or not.
