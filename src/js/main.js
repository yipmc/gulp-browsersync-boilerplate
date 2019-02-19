function AppViewModel() {
    this.firstName = "Bertje";
    this.lastName = "Bertington";
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());