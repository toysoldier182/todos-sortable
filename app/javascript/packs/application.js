require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";

import "controllers"

import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
const application = Application.start()
const context = require.context("controllers", true, /.js$/)
application.load(definitionsFromContext(context))
